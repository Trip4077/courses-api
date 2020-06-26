const BaseModel = require( '../base_model' );
const Boards = require( './board_model' );

class Discussions extends BaseModel {
    async getWithBoards() {
        try {
            const discussions = await this.getAll();
            
            for(let i = 0; i < discussions.length; i++) {
                const boards = await Boards.getBy({ discussion_id: discussions[i].id });

                discussions[i].boards = boards;
            }

            return discussions;
        }

        catch(err) {
            console.log('----------' + err + '----------');
        }
    }
}

module.exports = new Discussions( 'Discussions' );