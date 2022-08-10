import React, {forwardRef, useCallback, useEffect, useMemo} from 'react';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {Types} from 'generated/types';
import {HPADDING} from 'styles/Scales';

const CustomBottomSheet = forwardRef((props: Types.IButtomSheet, ref: any) => {
  useEffect(() => {
    if (!props?.visible) {
      ref.current?.close();
    }
  }, [props?.visible, ref]);

  const getSnapValue = useCallback(() => {
    if (props?.snapPoint) {
      //@ts-ignore
      return [...props?.snapPoint];
    } else {
      return ['50%'];
    }
  }, [props?.snapPoint]);

  const snapPoints = useMemo(
    () => ['CONTENT_HEIGHT', ...getSnapValue()],
    [getSnapValue],
  );

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  const handleSheetChanges = useCallback((index: number) => {
    __DEV__ && console.log('handleSheetChanges', index);
  }, []);

  const renderContent = () => {
    if (props?.isModal) {
      return (
        <BottomSheetModal
          enablePanDownToClose
          ref={ref}
          snapPoints={animatedSnapPoints}
          handleHeight={animatedHandleHeight}
          contentHeight={animatedContentHeight}
          onChange={handleSheetChanges}>
          <BottomSheetView
            onLayout={handleContentLayout}
            style={{paddingBottom: HPADDING}}>
            {props?.children}
          </BottomSheetView>
        </BottomSheetModal>
      );
    }

    return (
      <>
        {props?.visible && (
          <BottomSheet
            enablePanDownToClose
            ref={ref}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            onChange={handleSheetChanges}>
            <BottomSheetView
              onLayout={handleContentLayout}
              style={{paddingBottom: HPADDING}}>
              {props?.children}
            </BottomSheetView>
          </BottomSheet>
        )}
      </>
    );
  };

  return <>{renderContent()}</>;
});

export default CustomBottomSheet;
