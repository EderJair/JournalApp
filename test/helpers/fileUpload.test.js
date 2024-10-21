
import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers"


cloudinary.config({
    cloud_name: 'dhdpp8eq2',
    api_key: '199734467747547',
    api_secret: 'k-JMgYeK4CNkhT3RpsJjxCix0Uw',
    secure: true
});

describe('Pruebas en fileUpload', () => {


    test('debe de subir un archivo a cloudinary', async() => {
        
        const imageUrl = 'https://res.cloudinary.com/dhdpp8eq2/image/upload/v1729366003/tzyjveweogbzd8j18aoh.jpg'
        const resp = await fetch(imageUrl)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.png')


        const url = await fileUpload(file)
        expect( typeof url ).toBe('string')

        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.jpg', '')

        const cloudResp = await cloudinary.api.delete_resources([imageId], {
            resource_type: 'image'
        })
        console.log({cloudResp})



    })

    test('debe de retornar null', async () => {

        const file = new File([], 'foto.png')

        const url = await fileUpload(file)
        expect(url).toBe(null)
    })







})