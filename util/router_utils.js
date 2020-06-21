module.exports = {
    validateIdParam: id => {
        if( Number.isNaN( Number( id ))) return false;
        else if ( !id ) return false;
        else return true;
    },
}