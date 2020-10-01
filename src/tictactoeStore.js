import { readable } from 'svelte/store';

let connection;
let connectionTimer; 
let message;

const connect = () => {
    const {env: {wsUrl}} =  process;
    try {
        if (!connection || connection.readystate >= 2) {
            connection = new WebSocket(wsUrl);

            connection.onclose = e => {
                console.log(e, 'closed');
                // set interval to start connection
                connectionTimer = setInterval(() => {
                    connect();
                }, 500);
            }

            connection.onopen = _ => {
                clearInterval(connectionTimer);
                console.log('connected');
            }

            connection.onmessage = e => {
                message = e.data;
            }
        }

    } catch(er) {
        console.log({er});
    }
}

const store = new readable(undefined, set => {
    const readMessage = setInterval( _ => {
        if (message) {
            set(JSON.parse(message));
            message = undefined;
        }
    }, 5);
    
    return () => {
        if (connection) {
            connection.close();
        }

        clearInterval(readMessage);
    }
})

connect(); // to websocket

export default {
    subscribe: store.subscribe,    
    isConected: () => connection.readyState <= 1
}