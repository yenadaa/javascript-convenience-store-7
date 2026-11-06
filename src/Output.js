import { MissionUtils } from "@woowacourse/mission-utils";

class OutputClass {
    welcomePrint() {
        MissionUtils.Console.print('안녕하세요. W편의점입니다.');
        MissionUtils.Console.print('현재 보유하고 있는 상품입니다.');
    }
}
export default OutputClass