---
id: "heap_analysis_src.StringAnalysis"
title: "Class: StringAnalysis"
sidebar_label: "StringAnalysis"
custom_edit_url: null
---

This analysis finds duplicated string instance in JavaScript heap
and rank them based on the duplicated string size and count.

## Hierarchy

- [`BaseAnalysis`](heap_analysis_src.BaseAnalysis.md)

  ↳ **`StringAnalysis`**

## Constructors

### <a id="new stringanalysis"></a>**new StringAnalysis**()

## Methods

### <a id="analyzesnapshotfromfile"></a>**analyzeSnapshotFromFile**(`file`)

Run heap analysis for a single heap snapshot file

 * **Parameters**:
    * `file`: `string` | the absolute path of a `.heapsnapshot` file.
 * **Returns**: `Promise`<`AnalyzeSnapshotResult`\> | this API returns {@link AnalyzeSnapshotResult}, which contains
the logging file of analysis console output. Alternatively, to get more
structured analysis results, check out the documentation of the hosting
heap analysis class and call the analysis-specific API to get results
after calling this method.
* **Example**:
```typescript
const analysis = new StringAnalysis();
// analysis console output is saved in result.analysisOutputFile
const result = await analysis.analyzeSnapshotFromFile(snapshotFile);
// query analysis-specific and structured results
const stringPatterns = analysis.getTopDuplicatedStringsInCount();
```

 * **Source**:
    * heap-analysis/src/BaseAnalysis.ts:79

___

### <a id="getcommandname"></a>**getCommandName**()

get CLI command name for this memory analysis;
use it with `memlab analyze <ANALYSIS_NAME>` in CLI

 * **Returns**: `string` | command name

 * **Source**:
    * heap-analysis/src/plugins/StringAnalysis.ts:118

___

### <a id="gettopduplicatedstringsincount"></a>**getTopDuplicatedStringsInCount**()

get the top duplicated string in terms of duplicated string count

 * **Returns**: `StringRecord`[] | an array of the top-duplicated strings' information

 * **Source**:
    * heap-analysis/src/plugins/StringAnalysis.ts:68
