// a function seems necessary to hang the server
function somethingReturningFindOptions() {
    return {};
}
class UserModel {
}
({}.findOne('one', somethingReturningFindOptions()));
export {};
