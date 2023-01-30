# Runtime Extension Wrapper | Deno

This library is a runtime extension wrapper for Deno extensions, built for the
Blockless Network

[Blockless](https://blockless.network) module starter repository.

## Usage

```typescript
import { CGIExtension } from "https://deno.land/x/bls_runtime_extension/mod.ts";

const redisClient = // TODO: Connect your redis client ..
async function main() {
  // Create a CGI Runtime Extension
  const redisExtension = new CGIExtension({
    name: "bls-redis-extension",
    alias: "redis",
    description: "Redis extension for Blockless Runtime built with Deno",
  });

  // Export methods to runtime
  redisExtension.export("get", (key: string) => {
    return redisClient.get(key);
  });
  redisExtension.export("set", (key: string, value: string) => {
    return redisClient.set(key, value);
  });

  // Execute and listen to incoming readable stream
  await redisExtension.execute();
};

main();
```
