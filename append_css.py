with open('css/styles.css', 'a', encoding='utf-8') as f:
    f.write('''

/* Nested Dropdowns */
.dropdown-submenu {
  position: relative;
}

.dropdown-nested {
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 220px;
  background: var(--bg-card);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-10px);
  transition: all var(--transition-fast);
  list-style: none;
  padding: var(--space-2) 0;
}

.dropdown-submenu:hover > .dropdown-nested {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.dropdown-submenu > .dropdown__link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

[data-theme="dark"] .dropdown-nested {
  background: var(--bg-card);
  border-color: var(--border-color);
}
''')
