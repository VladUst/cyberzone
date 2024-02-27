type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, val]) => Boolean(val))
            .map(([className, _]) => className),
    ].join(' ');
}
