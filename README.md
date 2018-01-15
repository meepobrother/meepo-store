# store for angular

```
yarn add meepo-store
```

```ts
import { StorageWebModule } from 'meepo-store';
// 仅含有localStorage 减小代码体积
import { StoreModule } from 'meepo-store';
```

- StorageWebModule 
```ts
// export { as StorageWebModule} from 'angular-web-storage';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'meepo-store';
@LocalStorage() localValue: Object = { text: `Hello ${+new Date}`};
// 设置存储KEY，以及10个小时后过期
@LocalStorage('newKey', 10, 'h') localValue2: Object = { text: `Hello ${+new Date}`};
@SessionStorage() sessionValue: string = `Hello ${+new Date}`;


```

- StoreModule

```ts
import { StoreService } from 'meepo-store';
```

