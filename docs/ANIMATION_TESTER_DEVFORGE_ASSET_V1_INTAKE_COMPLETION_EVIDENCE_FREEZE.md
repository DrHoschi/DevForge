# Animation Tester ↔ DevForge Asset – V1 Intake Completion / Evidence / Freeze

## Status

**PASS / 0 BLOCKER / FROZEN**

Functional freeze authority:

`93a419b4f7ab2280a71300e9b851ded9b9b7f5f6`

Implementation baseline:

`b08a4e070ac8633dab542ed650fa06459ae6e5a9`

Scope authority:

`docs/ANIMATION_TESTER_DEVFORGE_ASSET_V1_INTAKE_IMPLEMENTATION_SCOPE.md`

This completion record freezes the verified V1 read-only DevForge Asset intake into the existing standalone Animation Tester. It does not integrate the feature branch into `main`.

## Frozen objective

The completed V1 handoff is:

`Sprite Lab → devforge-asset-v1 → Animation Tester → frame review/playback`

The Animation Tester consumes the Sprite-Lab-produced asset without becoming a second authority for asset data.

## Product scope evidence

The complete product-code diff from the implementation baseline to the functional freeze authority is confined to exactly:

- `tools/animation-tester/index.html`

Verified compare:

- baseline: `b08a4e070ac8633dab542ed650fa06459ae6e5a9`
- functional head: `93a419b4f7ab2280a71300e9b851ded9b9b7f5f6`
- ahead: 2
- behind: 0
- product files changed: 1
- product diff: 14 additions / 6 deletions

No Sprite Lab, asset-contract, shared-infrastructure, persistence-service, Layer/Z-Order, Rig/Skeleton or other tool file is part of the product diff.

## Implemented V1 capability

The frozen implementation adds a third Animation Tester intake path for a local `devforge-asset-v1` JSON file.

It:

- validates `meta.format === "devforge-asset-v1"` and `meta.version === 1`
- requires the V1 embedded atlas
- rejects invalid or duplicate stable frame IDs
- reads frame source rectangles from the shared atlas
- preserves stable frame IDs
- preserves canonical `render2d.frames[]` order
- renders review frames from atlas source rectangles
- builds thumbnails from the same atlas rectangles
- uses asset-defined `anchorX` and `anchorY`
- applies asset-defined frame `scale`
- keeps tester Zoom as an independent review multiplier
- uses the existing frame navigation/playback/review controls
- does not write asset data back

The existing individual-image and repository-manifest intake paths remain present.

## Verification evidence

### Static implementation verification

The implementation was evaluated read-only against the documented 21-point verification contract.

An initial verification of `5869f22ca705663c854a3557d0e6defc18f732b4` found one blocker: the first scale formula mathematically cancelled `assetScale`.

The separately authorized blocker fix changed only that scale calculation. The resulting functional head is:

`93a419b4f7ab2280a71300e9b851ded9b9b7f5f6`

The repeated read-only verification established:

**STATIC VERIFICATION PASS / 0 BLOCKER**

Static evidence covers the documented format/version validation, embedded-atlas requirement, stable-ID handling, canonical asset ordering, atlas cropping, thumbnail cropping, anchor use, effective asset scale, independent tester Zoom, navigation/playback paths, Onion Skin, overlays, legacy individual-image path, legacy manifest path and absence of out-of-scope write-back/authoring systems.

### TESTBUILD evidence

The existing `Manual Test Deploy` workflow was used with the exact functional head:

`93a419b4f7ab2280a71300e9b851ded9b9b7f5f6`

The user reported that the workflow completed successfully green.

This establishes successful deployment of the exact functional head used for manual evidence.

### Real Sprite Lab → Animation Tester evidence

The user exported a real DevForge Asset from Sprite Lab / Asset Lab and imported that exported asset into the Animation Tester TESTBUILD.

Observed/reported manual evidence established that:

- the real `devforge-asset-v1` intake succeeds
- the embedded atlas is usable by the Animation Tester
- the asset frames are available for review
- frame navigation/review works
- the existing review functions tested by the user continue to work
- the new handoff works on the tested narrow iPhone device

The user subsequently confirmed that the remaining exercised review controls still work.

Manual evidence result:

**MANUAL EVIDENCE PASS / 0 BLOCKER**

## Repository-manifest limitation

The repository-manifest intake predates this V1 DevForge Asset handoff.

The user does not have an established real-world/manual repository-manifest workflow and could not identify that path as one previously used in practice. Therefore this completion gate does **not** claim a fresh end-to-end manual manifest regression.

Instead:

- the existing manifest implementation remains present
- its URL/frame loading path remains present
- manifest FPS application remains present
- manifest Loop application remains present
- its legacy Bottom-Center review behavior remains preserved by the shared renderer fallback
- these points were verified statically in the implementation/regression gate

This is recorded as an evidence limitation, not a blocker for the new Sprite Lab → DevForge Asset → Animation Tester V1 handoff.

## Authority boundary retained

The DevForge Asset remains authoritative for:

- asset ID
- embedded atlas
- stable frame identity
- frame names and rectangles
- anchors
- scale
- Spatial data
- Marker/Socket data

V1 introduces no Animation Tester write-back into that asset.

No animation persistence/export, clip contract, timeline authoring, Layer/Z-Order system, Rig/Skeleton system, Marker/Socket editing or Spatial editing is included in this freeze.

## Freeze decision

Functional authority:

`93a419b4f7ab2280a71300e9b851ded9b9b7f5f6`

Result:

**V1 INTAKE COMPLETE / STATIC PASS / MANUAL EVIDENCE PASS / 0 BLOCKER / FROZEN**

The functional freeze remains the commit above. Any later completion-documentation commit is evidence/documentation only and does not replace the functional authority.

No integration into `main` is performed by this gate.
