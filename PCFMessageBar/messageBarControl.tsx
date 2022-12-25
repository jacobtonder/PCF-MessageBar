import * as React from 'react'
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/components/MessageBar';
  
export interface IMessageProps
{
    messageType? : number;
    messageText? : string | null;
}

export const MessageBarControl: React.FunctionComponent<IMessageProps> = props =>
{
    return (
        <MessageBar messageBarType={props.messageType}>
            {props.messageText}
        </MessageBar>
    );
}