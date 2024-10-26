import { checkingAuthentication } from "../../../src/store/auth/thunks"

jest.mock('../../../src/firebase/providers')


describe('Pruebas en AuthThu ', () => {

    const dispatch = jest.fn()
    beforeEach(()=> jest.clearAllMocks())


    test('debe invocar el checkingCredentials', async() => {


        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingAuthentication())



    })


})