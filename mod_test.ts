import { assertEquals } from "./test_deps.ts";
import { CGIExtension } from "./mod.ts";

Deno.test(function test_extension() {
  const extension = new CGIExtension({
    name: "Test Extension",
    alias: "tester",
    description: "This is a test extension",
  });

  const encoder = new TextEncoder();
  assertEquals(
    extension.verify(),
    encoder.encode(JSON.stringify({
      alias: "tester",
      name: "Test Extension",
      description: "This is a test extension",
      is_cgi: true,
    })),
  );
});
