const authFixture = {
    loginSuccess: {
        request: {
            body: {
                email: 'test@test.com',
                password: 'azertY',
            },
        },
        response: {
            status: 200,
            body: {
                success: true,
                data: {
                    name: 'test',
                    email: 'test@test.com',
                    role: 'publisher',
                },
                token: 'sample-token',
            },
        },
    },
    loginFailure: {
        request: {
            body: {
                email: 'test@test.com',
                password: 'invalidpassword',
            },
        },
        response: {
            status: 401,
            body: {
                success: false,
                errorMessage: '\tWrong password',
            },
        },
    },

    registerSuccess: {
        request: {
            body: {
                name: 'test',
                email: 'test@test.com',
                password: 'azertY',
                role: 'publisher',
            },
        },
        response: {
            status: 200,
            body: {
                success: true,
                data: {
                    name: 'test',
                    email: 'test@test.com',
                    role: 'publisher',
                },
                token: 'sample-token',
            },
        },
    },
    registerError: {
        request: {
            body: {
                name: 'test',
                password: 'azertY',
                email: 'test@test.com',
            },
        },
        response: {
            status: 400,
            body: {
                success: false,
                errorMessage: 'Duplicate field value entered',
            },
        },
    },
};

export default authFixture;
