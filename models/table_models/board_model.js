const BaseModel = require( '../base_model' );
const Messages = require( './message_model' )

class Boards extends BaseModel {
    async getDetails() {
        try {
            const boards = await this.getAll();

            for(let i = 0; i < boards.length; i++) {
                const messages = await Messages.getBy({ board_id: boards[i].id });

                boards[i].messages = messages;

                for(let j = 0; j < boards[i].messages.length; j++) {
                    const replies = await Messages.getReplies( boards[i].messages[j].id );
      
                    boards[i].messages[j].replies = replies;
                }
            }

            return boards;
        }

        catch(err) {
            console.log('----------' + err + '----------');
        }
    } 
    
    async getDetail( board_id ) {
       try {
          const board = await this.getBy({ id: board_id });
          const messages = await Messages.getBy({ board_id });

          for(let i = 0; i < messages.length; i++) {
              const replies = await Messages.getReplies( messages[i].id );

              messages[i].replies = replies;
          }
    
          board[0].messages = messages; 

          return board;
       } 

       catch(err) {
          console.log('----------' + err + '----------');
       }
    }
}

module.exports = new Boards( 'Boards' );