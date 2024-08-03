import type {Entorypoint} from "jsr:@denops/std@7.0.0";
import type {Denops} from "jsr:@denops/core";

export const main: Entorypoint = (denops: Denops) => {
  denops.dispatcher = {
    async hello() {
      await denops.cmd('echo "Hello, Denops!"');
    }
  }
}
