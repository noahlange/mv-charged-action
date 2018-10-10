import Plugsy from 'plugsy';
import ChargePlugin from './lib/ChargePlugin';

export default class Plugin extends Plugsy {
  public plugin: ChargePlugin | null = null;
  public init() {
    super.init();
    this.plugin = new ChargePlugin();
  }
}

$plugsy.install(new Plugin());
