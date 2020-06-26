const BaseModel = require( '../base_model' );
const Boards = require( './board_model' );

class Discussions extends BaseModel {
    async getDetails() {
        try {
            const discussions = await this.getAll();
            
            for(let i = 0; i < discussions.length; i++) {
                const boards = await Boards.getBy({ discussion_id: discussions[i].id });

                discussions[i].boards = boards;
            }

            return discussions;
        }

        catch(err) {
            console.error('----------' + err + '----------');
        }
    }

    async getDetail( discussion_id ) {
        try {
            const discussion = await this.getBy({ id: discussion_id });
            const boards = await Boards.getDetail( discussion_id );
            
            discussion[0].boards = boards;

            return discussion;
        }

        catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Discussions( 'Discussions' );