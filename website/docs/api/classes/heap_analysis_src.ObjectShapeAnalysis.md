---
id: "heap_analysis_src.ObjectShapeAnalysis"
title: "Class: ObjectShapeAnalysis"
sidebar_label: "ObjectShapeAnalysis"
custom_edit_url: null
---

## Hierarchy

- [`BaseAnalysis`](heap_analysis_src.BaseAnalysis.md)

  ↳ **`ObjectShapeAnalysis`**

## Constructors

### <a id="new objectshapeanalysis"></a>**new ObjectShapeAnalysis**()

## Methods

### <a id="analyzesnapshotfromfile"></a>**analyzeSnapshotFromFile**(`file`)

Run heap analysis for a single heap snapshot file

 * **Parameters**:
    * `file`: `string` | the absolute path of a `.heapsnapshot` file.
 * **Returns**: `Promise`<`void`\> | this API returns void. To get the analysis results,
check out the documentation of the hosting heap analysis class and
call the analysis-specific API to get results after calling this method.
* **Example**:
```typescript
const analysis = new StringAnalysis();
await anaysis.analyzeSnapshotFromFile(snapshotFile);
const stringPatterns = analysis.getTopDuplicatedStringsInCount();
```

 * **Source**:
    * heap-analysis/src/BaseAnalysis.ts:75

___

### <a id="getcommandname"></a>**getCommandName**()

Get the name of the heap analysis, which is also used to reference
the analysis in memlab command-line tool.

The following terminal command will initiate with this analysis:
`memlab analyze <ANALYSIS_NAME>`

 * **Returns**: `string` | the name of the analysis
* **Examples**:
```typescript
const analysis = new YourAnalysis();
const name = analysis.getCommandName();
```

 * **Source**:
    * heap-analysis/src/plugins/ObjectShapeAnalysis.ts:28
