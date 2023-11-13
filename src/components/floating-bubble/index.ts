import FloatingBubble from './FloatingBubble';
import type { App, Component } from 'vue';

FloatingBubble.install = function (app: App) {
  app.component(FloatingBubble.name, FloatingBubble);
};

export default FloatingBubble as any;
