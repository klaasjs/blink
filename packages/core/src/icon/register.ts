import { Icon } from './icon';

customElements.define('blink-icon', Icon);

declare global {
  interface HTMLElementTagNameMap {
    'blink-icon': Icon
  }
}