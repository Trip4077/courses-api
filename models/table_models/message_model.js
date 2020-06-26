const BaseModel = require( '../base_model' );

class Messages extends BaseModel {
    async getReplies( message_id ) {
        try {
            const replies = await this.getBy({ reply_to: message_id });

            return replies;
        }

        catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Messages( 'Messages' );