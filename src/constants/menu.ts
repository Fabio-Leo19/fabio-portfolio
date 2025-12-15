/**
 * Navegação do Menu
 * Centraliza os itens do menu de navegação do site
 */

export interface MenuItem {
  name: string;
  href: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: 'HOME', href: '#home' },
  { name: 'SOBRE', href: '#sobre' },
  { name: 'EXPERIÊNCIA', href: '#experiencia' },
  { name: 'PROJETOS', href: '#projetos' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTATO', href: '#contato' },
];
