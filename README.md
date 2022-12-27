# utils.nodejs-load-balancer
A nodejs app to emulate load balancer behavior (mainly for concurrency use cases)


## Usage

```bash
npm i
```

### Edit ports
```javascript
// index.js

/**
 * my servers are running on :
 * localhost:4100
 * localhost:4101
 * localhost:4102
 * localhost:4103
 * localhost:4104
 */
const ports = [4100, 4101, 4102, 4103, 4104];
```

### Start
```bash
node index.js
```
