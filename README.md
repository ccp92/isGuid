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
const isGuid = require('check-is-guid');

isGuid('f4090a94-1774-46d7-b469-109ddec68cd2'); // true
isGuid('f4090a94-1774-46d7-b469-109ddec68cd'); // false
```

```typescript
import isGuid from 'check-is-guid';

isGuid('f4090a94-1774-46d7-b469-109ddec68cd2'); // true
isGuid('f4090a94-1774-46d7-b469-109ddec68cd'); // false
```