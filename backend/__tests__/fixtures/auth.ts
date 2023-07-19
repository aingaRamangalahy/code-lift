const authFixture = {
    signinSuccess: {
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
                  role: 'sender',
              },
              token: 'sample-token',
            },
        },
    },
    signinFailure: {
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

    signupSuccess: {
        request: {
            body: {
                name: 'test',
                email: 'test@test.com',
                password: 'azertY',
                role: 'sender',
            },
        },
        response: {
            status: 200,
            body: {
                success: true,
                data: {
                    name: 'test',
                    email: 'test@test.com',
                    role: 'sender',
                },
                token: 'sample-token',
            },
        },
    },
    signupError: {
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
    // Add more scenarios as needed
};

export default authFixture;