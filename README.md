## Extract data from a save file 
Using `SlormancerSaveParserService` class : 
```
const parsedSaveFile = this.slormancerSaveParserService.parseSaveFile(saveContent);
```
The parsed save file will be of type `GameSave` which contain the save raw data

## Create a character object from a parsed save file 
Using `SlormancerCharacterBuilderService` class : 

```
const character = this.slormancerCharacterBuilderService.getCharacterFromSave(parsedSaveFile, HeroClass.Mage);
```
The character result will be of type `Character` which is used by most build modifier classes
