import {
  animation,
  style,
  animate,
  state,
  trigger,
  transition,
} from '@angular/animations';

/**
 * Exemple d'animation
 */
export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
  }),
  animate('{{ time }}'),
]);

/**
 * Animation  de démo ouvert/fermé
 */
export const openCloseAnimation = trigger('openClose', [
  state(
    'open',
    style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow',
    })
  ),
  state(
    'closed',
    style({
      height: '100px',
      opacity: 0.8,
      backgroundColor: 'blue',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('0.5s')]),
]);

/**
 * Animation  de démo ouvert/fermé
 */
export const appearanceAnimation = trigger('appearance', [
  state(
    'hide',
    style({
      opacity: 0,
    })
  ),
  state(
    'appear',
    style({
      opacity: 1,
    })
  ),
  transition('hide <=> appear', [animate('0.2s')]),
]);
