// freeze because no one should update the object
const ClientErrors = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409
})

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR: 500
})

const SuccessCodes = Object.freeze({
    CREATED: 201,
    OK: 200
});

module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCodes
}
