import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Ref } from "react";

type TProps = { cancelHandler: () => void; bookingHandler: () => void };

export type TRef = Ref<BottomSheetMethods> | undefined;

export default TProps;
