import { defineConfig } from "vite"
import dns from "dns"
import react from "@vitejs/plugin-react"

  // Resolve localhost for Node v16 and older.
  // @see https://vitejs.dev/config/server-options.html#server-host.
  dns.setDefaultResultOrder("verbatim")

  // https://vitejs.dev/config/
  export default defineConfig({
      plugins: [react()],
      define: {
          __BASE__: JSON.stringify("/"),
          __MEDUSA_BACKEND_URL__: JSON.stringify("http://localhost:9000"),
      },
  })