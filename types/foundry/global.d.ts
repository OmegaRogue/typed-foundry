
type ConfiguredConfig = Config<AmbientLightDocument<Scene | null>, ActiveEffect<Actor | Item | null>, Actor, ActorDelta<TokenDocument>, ChatLog, ChatMessage, Encounter, Combatant<Encounter | null, TokenDocument>, EncounterTracker<Encounter | null>, CompendiumDirectory, Hotbar, Item, Macro, MeasuredTemplateDocument, TileDocument, TokenDocument, WallDocument<Scene | null>, Scene, User, EffectsCanvasGroup>;
declare global {
    const CONFIG: ConfiguredConfig;
    const canvas: Canvas;
    namespace globalThis {
        var game: Game;
        var fu: typeof foundry.utils;
        var ui: FoundryUI<ActorDirectory, ItemDirectory<Item<null>>, ChatLog, CompendiumDirectory, EncounterTracker<Encounter | null>>;
        interface Math {
            eq: (a: number, b: number) => boolean;
            gt: (a: number, b: number) => boolean;
            gte: (a: number, b: number) => boolean;
            lt: (a: number, b: number) => boolean;
            lte: (a: number, b: number) => boolean;
            ne: (a: number, b: number) => boolean;
            ternary: (condition: boolean | number, ifTrue: number, ifFalse: number) => number;
        }
    }
    interface Window {
        AutomaticBonusProgression: typeof AutomaticBonusProgression;
    }
    interface ClientSettings {
        get(module: "", setting: "automation.actorsDeadAtZero"): "neither" | "npcsOnly" | "pcsOnly" | "both";
        get(module: "", setting: "automation.effectExpiration"): boolean;
        get(module: "", setting: "automation.encumbrance"): boolean;
        get(module: "", setting: "automation.flankingDetection"): boolean;
        get(module: "", setting: "automation.iwr"): boolean;
        get(module: "", setting: "automation.lootableNPCs"): boolean;
        get(module: "", setting: "automation.removeExpiredEffects"): boolean;
        get(module: "", setting: "automation.rulesBasedVision"): boolean;
        get(module: "", setting: "gradualBoostsVariant"): boolean;
        get(module: "", setting: "automaticBonusVariant"): "noABP" | "ABPFundamentalPotency" | "ABPRulesAsWritten";
        get(module: "", setting: "freeArchetypeVariant"): boolean;
        get(module: "", setting: "proficiencyVariant"): boolean;
        get(module: "", setting: "staminaVariant"): boolean;
        get(module: "", setting: "proficiencyUntrainedModifier"): number;
        get(module: "", setting: "proficiencyTrainedModifier"): number;
        get(module: "", setting: "proficiencyExpertModifier"): number;
        get(module: "", setting: "proficiencyMasterModifier"): number;
        get(module: "", setting: "proficiencyLegendaryModifier"): number;
        get(module: "", setting: "metagame_partyVision"): boolean;
        get(module: "", setting: "metagame_secretCondition"): boolean;
        get(module: "", setting: "metagame_secretDamage"): boolean;
        get(module: "", setting: "metagame_showBreakdowns"): boolean;
        get(module: "", setting: "metagame_showDC"): boolean;
        get(module: "", setting: "metagame_showPartyStats"): boolean;
        get(module: "", setting: "metagame_showResults"): boolean;
        get(module: "", setting: "metagame_tokenSetsNameVisibility"): boolean;
        get(module: "", setting: "tokens.autoscale"): boolean;
        get(module: "", setting: "worldClock.dateTheme"): "AR" | "IC" | "AD" | "CE";
        get(module: "", setting: "worldClock.playersCanView"): boolean;
        get(module: "", setting: "worldClock.showClockButton"): boolean;
        get(module: "", setting: "worldClock.syncDarkness"): boolean;
        get(module: "", setting: "worldClock.timeConvention"): 24 | 12;
        get(module: "", setting: "worldClock.worldCreatedOn"): string;
        get(module: "", setting: "campaignFeats"): boolean;
        get(module: "", setting: "campaignFeatSections"): FeatGroupOptions[];
        get(module: "", setting: "campaignType"): string;
        get(module: "", setting: "activeParty"): string;
        get(module: "", setting: "activePartyFolderState"): boolean;
        get(module: "", setting: "createdFirstParty"): boolean;
        get(module: "", setting: "homebrew.languages"): HomebrewTag<"languages">[];
        get(module: "", setting: "homebrew.weaponCategories"): HomebrewTag<"weaponCategories">[];
        get(module: "", setting: HomebrewTraitSettingsKey): HomebrewTag[];
        get(module: "", setting: "homebrew.damageTypes"): CustomDamageData[];
        get(module: "", setting: "homebrew.languageRarities"): LanguageRaritiesData;
        get(module: "", setting: "compendiumBrowserPacks"): CompendiumBrowserSettings;
        get(module: "", setting: "compendiumBrowserSources"): CompendiumBrowserSources;
        get(module: "", setting: "critFumbleButtons"): boolean;
        get(module: "", setting: "critRule"): "doubledamage" | "doubledice";
        get(module: "", setting: "deathIcon"): ImageFilePath;
        get(module: "", setting: "drawCritFumble"): boolean;
        get(module: "", setting: "enabledRulesUI"): boolean;
        get(module: "", setting: "gmVision"): boolean;
        get(module: "", setting: "identifyMagicNotMatchingTraditionModifier"): 0 | 2 | 5 | 10;
        get(module: "", setting: "nathMode"): boolean;
        get(module: "", setting: "seenRemasterJournalEntry"): boolean;
        get(module: "", setting: "statusEffectType"): StatusEffectIconTheme;
        get(module: "", setting: "totmToggles"): boolean;
        get(module: "", setting: "worldSchemaVersion"): number;
        get(module: "", setting: "worldSystemVersion"): string;
    }
    interface ClientSettingsMap {
        get(key: ".worldClock.worldCreatedOn"): SettingConfig & {
            default: string;
        };
    }
    interface RollMathProxy {
        eq: (a: number, b: number) => boolean;
        gt: (a: number, b: number) => boolean;
        gte: (a: number, b: number) => boolean;
        lt: (a: number, b: number) => boolean;
        lte: (a: number, b: number) => boolean;
        ne: (a: number, b: number) => boolean;
        ternary: (condition: boolean | number, ifTrue: number, ifFalse: number) => number;
    }
    const BUILD_MODE: "development" | "production";
    const CONDITION_SOURCES: ConditionSource[];
    const EN_JSON: typeof EnJSON;
    const ROLL_PARSER: string;
}
export {};
