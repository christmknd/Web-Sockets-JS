import { render, screen } from '@testing-library/react';
import App from './App';
import {io } from "socket.io-client"


test('send message via socket.io', () => {
  const socket= io("http://localhost:9000")
        const {container} = render( <form><input data-testid="finalInput"/></form> );
        socket.emit("send:message", 'my message');
        socket.on("send:message", res => {
            expect(res).toEqual('my message')
        })
});
