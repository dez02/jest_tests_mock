const User = require('./user');

const util = require('./util');

describe('User', () => {
    describe('#IsValid', () => {
        it('should return ok', () => {
            const item = {
                firstname: 'FIRSTNAME',
                lastname: 'LASTNAME',
                email: 'EMAIL',
                age: 13
            }

            const user = new User(item);

            expect(user.isValid()).toBeTruthy();
        });
    });

    describe('#IsFirstNameValid', () => {
        it('should return ok', () => {
            const item = {
                firstname: 'FIRSTNAME'
            }

            const user = new User(item);

            expect(user.isFirstNameValid()).toBeTruthy();
        });


        it('should return ko without firstname', () => {
            const item = {}

            const user = new User(item)

            expect(user.isFirstNameValid()).toBeFalsy()
        });

        it('should return ko firstname empty', () => {
            const item = {
                firstname: ''
            }

            const user = new User(item);

            expect(user.isFirstNameValid()).toBeFalsy()
        });

        it('should return ko firstname is null', () => {
            const item = {
                firstname: null
            }

            const user = new User(item)

            expect(user.isFirstNameValid()).toBeFalsy();
        });
    });
});