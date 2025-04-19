import GoogleMapReact from 'google-map-react'

export default function Contact () {
  return (
    <div id='contact'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDNKpLeG1iTYatnrYPmzt3A0QNWAsj0Z_A' }}
        defaultCenter={{
          lat: 40.763316,
          lng: -73.948631
        }}
        defaultZoom={14}
        options={{ styles: [{ featureType: 'landscape', stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: 'on' }] }, { featureType: 'poi', stylers: [{ saturation: -100 }, { lightness: 51 }, { visibility: 'simplified' }] }, { featureType: 'road.highway', stylers: [{ saturation: -100 }, { visibility: 'simplified' }] }, { featureType: 'road.arterial', stylers: [{ saturation: -100 }, { lightness: 30 }, { visibility: 'on' }] }, { featureType: 'road.local', stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }] }, { featureType: 'transit', stylers: [{ saturation: -100 }, { visibility: 'simplified' }] }, { featureType: 'administrative.province', stylers: [{ visibility: 'off' }]/**/ }, { featureType: 'administrative.locality', stylers: [{ visibility: 'off' }] }, { featureType: 'administrative.neighborhood', stylers: [{ visibility: 'on' }]/**/ }, { featureType: 'water', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: -25 }, { saturation: -100 }] }, { featureType: 'water', elementType: 'geometry', stylers: [{ hue: '#ffff00' }, { lightness: -25 }, { saturation: -97 }] }] }}
      />
      <div className='contact-info'>
        <h2>Contact <span className='orange'>Vitamin</span> Digital Media</h2>
        <p className='mb-3' />
      </div>
      <div className='textwidget'>
        <div>
          <form name='vitamin_contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='vitamin_contact' />
            <p className='mb-3'><span className='form-control-wrap your-name'><input type='text' name='your-name' size='40' maxLength='80' id='name' placeholder='Your name' aria-label='Your name' required aria-required='true' /></span></p>
            <p className='mb-3'><span className='form-control-wrap your-email'><input type='email' name='your-email' size='40' maxLength='80' id='email' placeholder='Your email' aria-label='Your email' required aria-required='true' /></span></p>
            <p className='mb-3'><span className='form-control-wrap your-subject'><input type='text' name='your-subject' size='40' maxLength='80' id='subject' placeholder='Subject' aria-label='Subject' /></span></p>
            <p className='mb-3'><span className='form-control-wrap your-message'><textarea name='your-message' cols='40' rows='10' maxLength='5000' id='message' placeholder='Your message' aria-label='Your message' /></span></p>
            <p className='mb-3'><input type='submit' value='Send' id='submit' /></p>
            <div className='response-output display-none' />
          </form>
        </div>
      </div>
    </div>
  )
}
