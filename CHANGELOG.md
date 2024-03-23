## Release 0.2.3 (2022-10-15)
Initial release

## Release 0.2.5 (2022-15-19)
### Changed
- Updated game files
- Added an order to some synergy loops

## Release 0.3.0 (2023-07-02)
### Added
- Raised max level to 70
- Ancestral legacies map now show the new ancestral legacies
## Fixes
- Cooldown reduction is now correctly applied to ancestral legacy activables

## Release 0.3.1 (2023-08-02)
## Fixes
- Fixed Spark Machine and Elemental Wizard realms not being correctly mapped

## Release 0.4.0  (2023-19-07)
### Added
- Raised max level to 80
- Added new legendaries data
- Added reinforcment cap to legendaries
## Fixes
- Fixed Replenish upgrade order 
- Lightning minimum damage is now correctly computed
- Fixed an issue causing ancestral legacy active effects to be applied twice
- Fixed an issue causing exported build above level 64 to have an incorrect level

## Release 0.4.1 (2023-25-07)
## Fixes
- Fixed an issue causing exported build with item level above 64 to have an incorrect level
- Fixed an issue causing exported build with an attribute rank above 64 to have an incorrect rank
- it is no longer possible to allocate more than 75 points into an attribute

## Release 0.5.0 (2023-24-09)
### Added
- Increased ancestral stone max and added the first stone
- Added a "triggered by book smash" config option for Embittered author
## Fixes
- Fixed Judge of Light incorrect % value
- Fixed Ancestral Instability incorrect % value
- Consistency is key minimum damage can no longer be below 1% of maximum
- Elemental reward max rank is now correctly affected by Ancestral champion's present
- Lightning minimum damage are now correctly set to 1 without Consistency is key

## Release 0.5.1 (2023-24-09)
## Fixes
- Fixed an issue when adding the first stone while not all ancestral nodes are present

## Release 0.6.0 (TBD)
### Added
- Added all the new visible reapers
## Fixes
- Personal Development Magazine damage multiplier is no longer applied twice
- Reaper primordial data are no longer lost when parsed from a save file
- Attributes now allow invalid values on save parsing to avoid issues with corrupted saves
- Ancestral legacy nodes should no longer allow impossible configurations
- Blorm damages is now correctly based on skill damage
- Determination synergy is now based on 100% tenacity instead of 1%
- Tenacity is now correctly capped at 100%
- Waste Not is no longer affected by Area Increased Size
- Inner fire and overdrive multipliers are now applied after additional damages
- Oak-Bark Armor stacks are now correctly applied to stats
- Personal development magazine damage bonus is no longer applied to upgrades
- Summon skeleton squire now has a config to add summon skeletons to minions under your control
- Fixed a save parsing error with profile values

## TODO
- mise à jour packages
- parsing loadouts
- formule resistance / armure