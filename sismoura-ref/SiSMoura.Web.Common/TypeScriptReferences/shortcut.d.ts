interface Shortcut {
    add(keyCombination: string, funcao: () => void, Options?: any);

    remove(keyCombination: string);
}

declare var shortcut: Shortcut;