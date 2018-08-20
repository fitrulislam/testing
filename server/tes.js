let a = ['tes', 'tes'];
let b = 'tes'
console.log(typeof b);

let reg = /^[+]?[1-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/
console.log(reg.test(-1.7));

{
  showTestModal && (
    <Modal>
      <ModalContent
        title={`${isValidForTest ? 'Testing pipeline' : 'Running algorithm'}`}
        subtitle={`${isValidForTest ? 'we are doing validation test on your papeline, please wait...' : 'we are running your algorithm, please wait...'}`}
        warning
      />
    </Modal>
  )
}
{
  showRunningModal && (
    <Modal>
      <ModalContent
        title="Your algorithm is running, please wait..."
        subtitle="or you can cancel it by pressing 'Cancel' button"
        buttonCancel="CANCEL"
        // onCancel={this.handleOnShowHideModal}
        warning
      />
    </Modal>
  )
}

checkStatus() {
  axios.get('http://localhost:3001/data/check')
    .then(response => {
      if (response.data.message === 'done') {
        this.setState({
          showRunningModal: false
        });
      } else {
        setTimeout(this.checkStatus, 5000);
      }
    })
    .catch(err => {
      console.log(err);
    });
}

const { getAllAlgorithm/* , setEntitiesStore */ } = this.props;
    getAllAlgorithm();
    this.tesReq();
    this.setState({
      showRunningModal: true
    });
    this.checkStatus();