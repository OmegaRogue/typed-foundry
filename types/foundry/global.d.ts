
type ConfiguredConfig = Config<AmbientLightDocument<Scene | null>, ActiveEffect<Actor | Item | null>, Actor, ActorDelta<TokenDocument>, ChatLog, ChatMessage, Encounter, Combatant<Encounter | null, TokenDocument>, EncounterTracker<Encounter | null>, CompendiumDirectory, Hotbar, Item, Macro, MeasuredTemplateDocument, TileDocument, TokenDocument, WallDocument<Scene | null>, Scene, User, EffectsCanvasGroup>;
declare global {
    const CONFIG: ConfiguredConfig;
    const canvas: Canvas;
    namespace globalThis {
        var game: Game;
        var fu: typeof foundry.utils;
        var ui: FoundryUI<ActorDirectory, ItemDirectory<Item<null>>, ChatLog, CompendiumDirectory, EncounterTracker<Encounter | null>>;
    }
}
export {};