(false && undefined);
// false
(false || undefined);
// false
((false && undefined) || (false || undefined));
// undefined
((false || undefined) || (false && undefined));
// undefined
((false && undefined) && (false || undefined));
// false
((false || undefined) && (false && undefined));

('a' || (false && undefined) || '');

((false && undefined) || 'a' || '');

('a' && (false || undefined) && '');

((false || undefined) && 'a' && '');