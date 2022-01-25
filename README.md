# Cookie Popup Gdpr

Simple cookie popup to ask consent.

![image](https://user-images.githubusercontent.com/28866565/150764760-af050ffc-a476-4672-811f-2a3a9f847fcb.png)


## Installation

```shell
npm install @performing/cookie-popup-gpdr

```

## Usage
```javascript
import '@performing/cookie-popup-gdpr'
import '@performing/cookie-popup-gdpr/dist/style.css'

useCookies({
  description: 'We use cookies...',
  acceptButtonText: 'Accept All',
  rejectButtonText: 'Reject All',
  saveButtonText: 'Save',
  customizeButtonText: 'Customize',
}, {
  necessary: { 
    default: true, 
    optional: false, 
    title: 'Necessary:',
    description: 'This type of cookie is necessary',
  },
  statistics: { 
    default: false, 
    optional: true, 
    title: 'Statistics:',
    description: 'This type of cookie is for gather statistics',
  },
}, (p) => { 

  if (p.statistics) {
    // gather statistics  
  }

});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

