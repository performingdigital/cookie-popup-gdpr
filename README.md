# Cookie Popup Gdpr

Simple cookie popup to ask consent.

![image](https://user-images.githubusercontent.com/28866565/150764760-af050ffc-a476-4672-811f-2a3a9f847fcb.png)


## Installation

```shell
npm install @performing/cookie-popup-gpdr

```

## Usage
```javascript
import '@performing/cookie-popup-gpdr'
import '@performing/cookie-popup-gpdr/dist/style.css'

useCookies('We use cookies...', {
  necessary: { 
    default: true, 
    optional: false, 
    description: 'This type of cookie is necessary',
  },
  statistics: { 
    default: false, 
    optional: true, 
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

