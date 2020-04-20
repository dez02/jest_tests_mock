const User = require('./user');
const util = require('./util')

jest.mock('./util');

describe('User', () => {
    describe('isLastNameValid', () => {
        it('should return ok', () => {
            util.isNameValid.mockReturnValueOnce(true)

            const item = {
                lastname: 'LASTNAME'
            }

            const user = new User(item);

            expect(user.isLastNameValid()).toBeTruthy();

            expect(util.isNameValid).toHaveBeenCalledWith(item.lastname);
        });
    });
});