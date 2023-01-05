// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ConsumePi.sol";

contract CallConsume is ConsumePi {

    function callPi(CallConsume _addr) external view returns(uint) {
        uint data = _addr.getData();
        return data;
    }

}