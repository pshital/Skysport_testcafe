import { Selector } from "testcafe";

export default class  Cookie {
    constructor() {
        this.noticeIframe = Selector('#sp_message_iframe_533903');
        this.acceptButton = Selector('.message-component').find('button').withText('Accept')
    }
}     