# isGuid
A small package for checking if a string is a valid GUID.

## Installation
```bash
npm install check-is-guid
```
```bash
yarn add check-is-guid
```

## Usage
```typescript
const checkIsGuid = require('check-is-guid');

checkIsGuid('f4090a94-1774-46d7-b469-109ddec68cd2'); // true
checkIsGuid('f4090a94-1774-46d7-b469-109ddec68cd'); // false
```

```typescript
import checkIsGuid from 'check-is-guid';

checkIsGuid('f4090a94-1774-46d7-b469-109ddec68cd2'); // true
checkIsGuid('f4090a94-1774-46d7-b469-109ddec68cd'); // false
```

### Optional Arguments
Add an optional version argument to also confirm the GUID is a specific version.
```typescript
checkIsGuid('f4090a94-1774-46d7-b469-109ddec68cd2', {version: 4}); // true
checkIsGuid('f4090a94-1774-46d7-b469-109ddec68cd2', {version: 5}); // false
```