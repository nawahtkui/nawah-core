
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NawahToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Nawah Token", "NWTK") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}

contract NawahTokenSale is Ownable {
    IERC20 public token;
    uint256 public rate; // عدد التوكن لكل 1 BNB
    address payable public wallet;

    event TokensPurchased(address indexed purchaser, uint256 amountBNB, uint256 amountTokens);

    constructor(IERC20 _token, uint256 _rate, address payable _wallet) {
        require(_rate > 0, "Rate must be > 0");
        require(_wallet != address(0), "Wallet is the zero address");
        token = _token;
        rate = _rate;
        wallet = _wallet;
    }

    receive() external payable {
        buyTokens();
    }

    function buyTokens() public payable {
        uint256 amountBNB = msg.value;
        require(amountBNB > 0, "Send BNB to buy tokens");

        uint256 amountTokens = amountBNB * rate;
        require(token.balanceOf(address(this)) >= amountTokens, "Not enough tokens");

        token.transfer(msg.sender, amountTokens);
        wallet.transfer(amountBNB);

        emit TokensPurchased(msg.sender, amountBNB, amountTokens);
    }

    function setRate(uint256 _rate) public onlyOwner {
        rate = _rate;
    }

    function withdrawTokens(uint256 amount) public onlyOwner {
        token.transfer(msg.sender, amount);
    }
}
