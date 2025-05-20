# Button

This is an example component.

```tsx
import React from 'react';
import { Button } from 'Super-UI-dmui';

const App: React.FC = () => <Button>普通按钮</Button>;

export default App;
```

### 按钮类型

通过 type 属性设置按钮类型。例如主按钮等

```tsx
import React from 'react';
import { Button } from 'Super-UI-dmui';

const App: React.FC = () => <Button type="primary">主按钮</Button>;

export default App;
```

### 禁用按钮

通过 disabled 属性设置按钮禁用。

```tsx
import React from 'react';
import { Button } from 'Super-UI-dmui';

const App: React.FC = () => <Button disabled>禁用按钮</Button>;

export default App;
```
