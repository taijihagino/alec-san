/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
  function main(param) {

    var resultJson = {};

    if (param.purpose == "checkin") {
        // チェックイン成功
        resultJson = { message: 'チェックイン処理が完了しました' };
    } else if (param.purpose == "checkout") {
        // チェックアウト成功
        resultJson = { message: 'チェックアウト処理が完了しました' };
    } else {
        // 該当処理無し
    }

    return resultJson;
}